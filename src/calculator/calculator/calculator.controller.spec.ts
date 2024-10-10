import { Test, TestingModule } from '@nestjs/testing';
import { CalculatorController } from '../calculator/calculator.controller';
import { CalculatorService } from '../calculator/calculator.service';

describe('CalculatorController', () => {
  let controller: CalculatorController;
  let service: CalculatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalculatorController],
      providers: [
        {
          provide: CalculatorService,
          useValue: {
            evaluate: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<CalculatorController>(CalculatorController);
    service = module.get<CalculatorService>(CalculatorService);
  });

  it('should return the result of the evaluated expression', () => {
    const expressionDto = { expression: '(1-1)*2+3*(1-3+4)+10/2' };

    jest.spyOn(service, 'evaluate').mockReturnValue(11);

    expect(controller.evaluate(expressionDto)).toEqual({ result: 11 });
    expect(service.evaluate).toHaveBeenCalledWith(expressionDto.expression);
  });

  it('should handle errors gracefully', () => {
    const expressionDto = { expression: '2 +' };

    jest.spyOn(service, 'evaluate').mockImplementation(() => {
      throw new Error('Invalid expression');
    });

    expect(() => controller.evaluate(expressionDto)).toThrowError(
      'Invalid expression',
    );
  });
});
