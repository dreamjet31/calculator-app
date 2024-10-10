import { Test, TestingModule } from '@nestjs/testing';
import { CalculatorService } from '../calculator/calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculatorService],
    }).compile();

    service = module.get<CalculatorService>(CalculatorService);
  });

  it('should evaluate valid expressions correctly', () => {
    expect(service.evaluate('(1-1)*2+3*(1-3+4)+10/2')).toBe(11);
    expect(service.evaluate('2 + 3 * 4')).toBe(14);
    expect(service.evaluate('10 / 2 - 1')).toBe(4);
  });

  it('should throw an error for invalid expressions', () => {
    expect(() => service.evaluate('2 +')).toThrow('Invalid expression');
    expect(() => service.evaluate('3 * (4 +')).toThrow('Invalid expression');
  });
});
