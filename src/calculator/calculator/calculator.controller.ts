import { Body, Controller, Post } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { ExpressionDto } from '../dto/expression.dto';

@Controller('evaluate')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Post()
  evaluate(@Body() expressionDto: ExpressionDto) {
    const { expression } = expressionDto;
    const result = this.calculatorService.evaluate(expression);
    return { result };
  }
}
