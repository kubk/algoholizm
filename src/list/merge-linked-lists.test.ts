import { ListNode, mergeTwoLists } from './merge-linked-lists';
import { expect, test } from 'vitest';

test('merge linked lists', () => {
  const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
  const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

  expect(mergeTwoLists(l1, l2)).toMatchSnapshot();
});
