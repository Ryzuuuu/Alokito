// Sanity checks for the static site. Run with `npm test` (Node 18+, no dependencies).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(join(root, 'alokito.html'), 'utf8');

const attrValues = (name) =>
  [...html.matchAll(new RegExp(`\\s${name}="([^"]*)"`, 'g'))].map((m) => m[1]);
const isRemote = (ref) => /^(https?:)?\/\//.test(ref) || /^(mailto|tel|data|javascript):/.test(ref);

test('every local src/href points to a file that exists', () => {
  const refs = [...attrValues('src'), ...attrValues('href')]
    .filter((ref) => ref && !ref.startsWith('#') && !isRemote(ref))
    .map((ref) => decodeURI(ref.split(/[?#]/)[0]));
  const missing = refs.filter((ref) => !existsSync(join(root, ref)));
  assert.deepEqual(missing, []);
});

test('ids are unique and every #anchor / data-bs-target resolves', () => {
  const ids = attrValues('id');
  assert.equal(new Set(ids).size, ids.length, 'duplicate id found');
  const targets = [...attrValues('href'), ...attrValues('data-bs-target')]
    .filter((ref) => ref.startsWith('#') && ref.length > 1)
    .map((ref) => ref.slice(1));
  assert.deepEqual(
    targets.filter((id) => !ids.includes(id)),
    [],
  );
});

test('every <img> has an alt attribute and no image is hot-linked', () => {
  const imgs = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
  assert.ok(imgs.length > 0);
  assert.deepEqual(imgs.filter((tag) => !/\salt="/.test(tag)), []);
  assert.deepEqual(imgs.filter((tag) => /\ssrc="(https?:)?\/\//.test(tag)), []);
});

test('volunteer form validation patterns accept and reject the right values', () => {
  const pattern = (id) => {
    const tag = html.match(new RegExp(`<input[^>]*\\sid="${id}"[^>]*>`))?.[0] ?? '';
    const source = tag.match(/\spattern="([^"]*)"/)?.[1];
    assert.ok(source, `#${id} has no pattern attribute`);
    return new RegExp(`^(?:${source})$`, 'v');
  };

  const pan = pattern('pan');
  assert.ok(pan.test('ABCDE1234F'));
  assert.ok(!pan.test('ABCD12345F'));
  assert.ok(!pan.test('12345'));

  const phone = pattern('phone');
  assert.ok(phone.test('9876543210'));
  assert.ok(!phone.test('98765'));

  const name = pattern('name');
  assert.ok(name.test('Asha Devi'));
  assert.ok(!name.test('Asha 2'));
});
