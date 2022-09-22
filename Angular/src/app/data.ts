export interface IResource {
  text: string;

  id: number;

  color: string;
}

export interface IData {
  text: string;

  assigneeId: number;

  placeId: number;

  startDate: Date;

  endDate: Date;

  allDay?: boolean;
}

export const assignees: IResource[] = [
  {
    text: 'Samantha Bright',
    id: 1,
    color: '#727bd2',
  }, {
    text: 'John Heart',
    id: 2,
    color: '#32c9ed',
  }, {
    text: 'Todd Hoffman',
    id: 3,
    color: '#2a7ee4',
  }, {
    text: 'Sandra Johnson',
    id: 4,
    color: '#7b49d3',
  },
];

export const places: IResource[] = [
  {
    text: 'home',
    id: 1,
    color: '#3bb825'
  },
  {
    text: 'office',
    id: 2,
    color: '#ba1c36'
  },
  {
    text: 'remote',
    id: 3,
    color: '#1e55e3'
  },
  {
    text: 'client',
    id: 4,
    color: '#e327c7'
  },
]

export const data: IData[] = [
  {
    text: 'Website Re-Design Plan',
    assigneeId: 4,
    placeId: 1,
    startDate: new Date('2021-04-26T16:30:00.000Z'),
    endDate: new Date('2021-04-26T18:30:00.000Z'),
  }, {
    text: 'Book Flights to San Fran for Sales Trip',
    assigneeId: 2,
    placeId: 1,
    startDate: new Date('2021-04-26T19:00:00.000Z'),
    endDate: new Date('2021-04-26T20:00:00.000Z'),
    allDay: true,
  }, {
    text: 'Install New Router in Dev Room',
    assigneeId: 1,
    placeId: 1,
    startDate: new Date('2021-04-26T21:30:00.000Z'),
    endDate: new Date('2021-04-26T22:30:00.000Z'),
  }, {
    text: 'Approve Personal Computer Upgrade Plan',
    assigneeId: 3,
    placeId: 1,
    startDate: new Date('2021-04-26T17:00:00.000Z'),
    endDate: new Date('2021-04-26T18:00:00.000Z'),
  }, {
    text: 'Final Budget Review',
    assigneeId: 1,
    placeId: 4,
    startDate: new Date('2021-04-26T19:00:00.000Z'),
    endDate: new Date('2021-04-26T20:35:00.000Z'),
  }, {
    text: 'Install New Database',
    assigneeId: 2,
    placeId: 3,
    startDate: new Date('2021-04-26T16:45:00.000Z'),
    endDate: new Date('2021-04-26T18:15:00.000Z'),
  }, {
    text: 'Approve New Online Marketing Strategy',
    assigneeId: 4,
    placeId: 4,
    startDate: new Date('2021-04-26T19:00:00.000Z'),
    endDate: new Date('2021-04-26T21:00:00.000Z'),
  }, {
    text: 'Upgrade Personal Computers',
    assigneeId: 2,
    placeId: 2,
    startDate: new Date('2021-04-26T22:15:00.000Z'),
    endDate: new Date('2021-04-26T23:30:00.000Z'),
  }, {
    text: 'Customer Workshop',
    assigneeId: 3,
    placeId: 3,
    startDate: new Date('2021-04-26T18:00:00.000Z'),
    endDate: new Date('2021-04-26T19:00:00.000Z'),
    allDay: true,
  }, {
    text: 'Prepare 2021 Marketing Plan',
    assigneeId: 1,
    placeId: 2,
    startDate: new Date('2021-04-26T15:00:00.000Z'),
    endDate: new Date('2021-04-26T17:30:00.000Z'),
  }, {
    text: 'Brochure Design Review',
    assigneeId: 4,
    placeId: 3,
    startDate: new Date('2021-04-26T21:00:00.000Z'),
    endDate: new Date('2021-04-26T22:30:00.000Z'),
  }, {
    text: 'Create Icons for Website',
    assigneeId: 3,
    placeId: 3,
    startDate: new Date('2021-04-26T19:00:00.000Z'),
    endDate: new Date('2021-04-26T20:30:00.000Z'),
  }, {
    text: 'Submit New Website Design',
    assigneeId: 1,
    placeId: 2,
    startDate: new Date('2021-04-26T23:30:00.000Z'),
    endDate: new Date('2021-04-27T01:00:00.000Z'),
  }, {
    text: 'Launch New Website',
    assigneeId: 2,
    placeId: 1,
    startDate: new Date('2021-04-26T19:20:00.000Z'),
    endDate: new Date('2021-04-26T21:00:00.000Z'),
  },
];
