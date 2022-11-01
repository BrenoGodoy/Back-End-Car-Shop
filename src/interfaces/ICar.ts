import { z } from 'zod';
import { vehicle } from './IVehicle';

export const car = vehicle.extend({
  doorsQty: z.number().gte(2).lte(4),
  seatsQty: z.number().gte(2).lte(7),
});

export type ICar = z.infer<typeof car>;
