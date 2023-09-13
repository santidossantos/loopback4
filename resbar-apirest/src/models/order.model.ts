import {Entity, model, property} from '@loopback/repository';

@model()
export class Order extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'date',
    default: '$now',
  })
  date?: string;

  @property({
    type: 'string',
    required: true,
  })
  waiter: string;

  @property({
    type: 'number',
    required: true,
  })
  table: number;

  @property({
    type: 'string',
    required: true,
  })
  client: string;

  @property({
    type: 'string',
    required: true,
  })
  status: string;

  @property({
    type: 'number',
    required: true,
  })
  total: number;

  @property({
    type: 'string',
    required: true,
  })
  qualification: string;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  items: object[];


  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
}

export type OrderWithRelations = Order & OrderRelations;
