import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './movie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  async searchMovies(searchTerm: string): Promise<Movie[]> {
    return this.movieRepository
      .createQueryBuilder('movie')
      .where('movie.title ILIKE :searchTerm', { searchTerm: `%${searchTerm}%` })
      .getMany();
  }
}
