import {
  IsString,
  MaxLength,
  MinLength,
  IsBoolean,
  IsNumber,
  Min,
  Max,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Frame } from '../frame.model';
import { ApiProperty } from '@nestjs/swagger';
import { FrameDto } from './frame-dto';
import { Type } from 'class-transformer';

export class UpdateProjectDto {
  @ApiProperty({
    example: 10,
    description: 'grid cell size',
    required: true,
  })
  @IsNumber()
  @Min(1)
  @Max(100)
  cellSize: number;

  @ApiProperty({
    example: 20,
    description: 'grid columns size',
    required: true,
  })
  @IsNumber()
  @Min(5)
  @Max(120)
  gridColumns: number;

  @ApiProperty({
    example: 20,
    description: 'grid rows size',
    required: true,
  })
  @IsNumber()
  @Min(5)
  @Max(120)
  gridRows: number;

  @ApiProperty({
    example: [
      'rgb(0, 0, 0)',
      'rgb(85, 239, 196)',
      'rgb(129, 236, 236)',
      'rgb(116, 185, 255)',
      'rgb(162, 155, 254)',
      'rgb(178, 190, 195)',
      'rgb(108, 92, 231)',
      'rgb(9, 132, 227)',
      'rgb(0, 206, 201)',
      'rgb(0, 184, 148)',
      'rgb(255, 234, 167)',
      'rgb(250, 177, 160)',
      'rgb(255, 118, 117)',
      'rgb(253, 121, 168)',
      'rgb(99, 110, 114)',
      'rgb(45, 52, 54)',
      'rgb(232, 67, 147)',
      'rgb(214, 48, 49)',
      'rgb(225, 112, 85)',
    ],
    description: 'grid pallete',
    required: true,
  })
  @IsArray()
  pallete: string[];

  @ApiProperty({
    example: 'This is my pixels',
    description: 'project title',
    required: true,
  })
  @IsString()
  @MaxLength(50)
  title: string;

  @ApiProperty({
    example: 'blah',
    description: 'project description',
    required: true,
  })
  @IsString()
  description: string;

  @ApiProperty({
    example: true,
    description: 'project publish',
    required: true,
  })
  @IsBoolean()
  isPublished: boolean;

  @ApiProperty({ isArray: true, type: FrameDto, required: true })
  @ValidateNested()
  @Type(() => FrameDto)
  frames: Frame[];
}
