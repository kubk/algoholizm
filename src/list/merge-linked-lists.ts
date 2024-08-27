export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const listNodeToArray = (n: ListNode) => {
  const result = [];
  let current: ListNode | null = n;
  do {
    if (current) {
      result.push(current.val);
    }
    current = current.next;
  } while (current);

  return result;
};

const arrayToListNode = (arr: number[]): ListNode|null => {
  if (arr.length === 0) {
    return null;
  }

  let parent: ListNode | null = null;
  let first: ListNode | null = null;

  for (let i = 0; i < arr.length; i++) {
    const n = new ListNode(arr[i]);
    if (parent) {
      parent.next = n;
      parent = n;
    } else {
      parent = n;
      first = n;
    }
  }

  return first;
};

export const mergeTwoLists = (list1: ListNode | null, list2: ListNode | null): ListNode|null => {
  const arr1 = list1 ? listNodeToArray(list1) : [];
  const arr2 = list2 ? listNodeToArray(list2) : [];
  const result = arr1.concat(arr2).sort((a, b) => a - b);

  return arrayToListNode(result);
};
