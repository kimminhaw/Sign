import { useEffect, useState } from "react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Router from "next/router";
import Link from "next/link";

const API_KEY = "031ae0d74f8282b211a02098af80df7a";

interface Movie {
  id: number;
  original_title: string;
  poster_path: string;
}

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      const { results } = await response.json();
      setMovies(results);
    };
    fetchMovies();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const handleMovieClick = (id: number, title: string, poster_path: string) => {
    Router.push({
      pathname: `/movies/${id}`,
      query: {
        title,
        poster_path,
      },
    });
  };

  const firstMovie = movies[0];
  const otherMovies = movies.slice(1, 11);
  const lastMovies = movies.slice(11);

  return (
    <div className="container">
      <div className="header">
        <Link href="/">
          <img src="logo.svg" />
        </Link>
        <div className="menu">
          <Link href="/popular">
            <h2>인기영화</h2>
          </Link>
          <Link href="/new">
            <h2>최신영화</h2>
          </Link>
          <h2>축제</h2>
        </div>
      </div>
      <div className="mainimg">
        {!movies && <h4>Loading...</h4>}
        {firstMovie && (
          <div
            onClick={() =>
              handleMovieClick(
                firstMovie.id,
                firstMovie.original_title,
                firstMovie.poster_path
              )
            }
            className="moviefirst"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${firstMovie.poster_path}`}
            />
          </div>
        )}
        <button className="play">PLAY</button>
      </div>
      <div className="list">
        <div>
          <h2>인기영화 10개</h2>
          {otherMovies.length > 0 && (
            <Slider {...settings}>
              {otherMovies.map((movie) => (
                <div
                  key={movie.id}
                  onClick={() =>
                    handleMovieClick(
                      movie.id,
                      movie.original_title,
                      movie.poster_path
                    )
                  }
                  className="movie"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  />
                </div>
              ))}
            </Slider>
          )}
        </div>
        <div>
          <h2>인기영화 9개</h2>
          {lastMovies.length > 0 && (
            <Slider {...settings}>
              {lastMovies.map((movie) => (
                <div
                  key={movie.id}
                  onClick={() =>
                    handleMovieClick(
                      movie.id,
                      movie.original_title,
                      movie.poster_path
                    )
                  }
                  className="movie"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  />
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
      <footer className="footer">
        <div>
          <h3>푸터</h3>
        </div>
      </footer>
      <style jsx>{`
        .header{
          display: flex;
          justify-content:space-between
          align-items:center
        }
        .header img{
          margin-left:20px;
        }
        .menu {
          display: flex;
        }
        .menu h2 {
           margin-left: 50px;
        }
        .moviefirst{
          text-align : center;
        }
        .mainimg{
          display: flex;
          flex-direction:column;
          align-items:center;
        }
        .play{
          background-color:red;
          color:white;
          padding:10px 50px;
          font-size :30px;
          align-self:center;
          margin:30px;
          border-radius:10px
        }
        .container {
          background-color:cyan
        }
        .list{
          padding-left:10px
        }
        .list h2{
          padding-top:20px
        }
        .moive {
          margin-left:20px
        }
        .movie img {
          max-width: 95%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.00) translateY(3px);
        }
        .slick-prev:before,
        .slick-next:before {
          color: #000;
        }
        .first {
          width: 100%;
          height: 550px;
          margin-top: 50px;
          margin-bottom: 300px;
        }
        .footer{
          padding-bottom:5px
        }
        .footer h3{
          margin:50px;
          text-align:center;
        }
        .slick-slide {
          margin-right: 15px;
        }
        @media (min-width: 768px) {
          .slick-slide {
            margin-right: 0px;
          }
        }
      `}</style>
    </div>
  );
}
