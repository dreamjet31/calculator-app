import { Module } from '@nestjs/common';
import { CalculatorService } from './calculator/calculator.service';
import { CalculatorController } from './calculator/calculator.controller';

@Module({
  providers: [CalculatorService],
  controllers: [CalculatorController]
})
export class CalculatorModule {}
