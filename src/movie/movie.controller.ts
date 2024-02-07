import { Controller, Get, Query } from '@nestjs/common';
import { Movie } from './movie.entity';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
  constructor(private movieService: MovieService) {}
  @Get('search')
  search(@Query('term') searchTerm: string): Promise<Movie[]> {
    return this.movieService.searchMovies(searchTerm);
  }
}
