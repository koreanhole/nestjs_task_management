import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty({
    message: '비어있으면 안됨',
  })
  title: string;

  @IsNotEmpty()
  description: string;
}
