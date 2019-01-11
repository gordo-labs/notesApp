export interface Note {
  id: number;
  title?: string;
  text?: string;
  color?: string;
}

export let notes: Note[] = [{
  id: 0,
  title: 'Note1',
  text: 'Example Note',
  color: 'gold'
}];
