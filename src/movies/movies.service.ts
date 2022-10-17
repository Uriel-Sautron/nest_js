import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './interfaces/movie.interface';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  create(movie: CreateMovieDto) {
    return this.movies.push(movie);
  }

  findAll(): Movie[] {
    return this.movies;
  }

  findOne(id: number) {
    return this.movies.find((movie) => movie.id === id);
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return this.movies.map((movie) =>
      movie.id === id ? (movie.title = updateMovieDto.title) : movie,
    );
  }

  remove(id: number) {
    return (this.movies = this.movies.filter((movie) => movie.id !== id));
  }
}
