import { Injectable } from '@nestjs/common';
import { create, all } from 'mathjs';

const math = create(all);

@Injectable()
export class CalculatorService {
  evaluate(expression: string): number {
    try {
      return math.evaluate(expression);
    } catch (error) {
      throw new Error('Invalid expression');
    }
  }
}
