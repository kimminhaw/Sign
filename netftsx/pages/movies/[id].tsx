import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

interface DetailProps {
  posterPath: string;
  title: string;
  releaseYear: number;
  certification: string;
  runtime: number;
  overview: string;
}

export default function Detail({
  posterPath,
  title,
  releaseYear,
  certification,
  runtime,
  overview,
}: DetailProps) {
  const router = useRouter();

  // runtime을 시:분 형태로 변환하는 함수
  const formatRuntime = (runtime: number): string => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="page">
      <button onClick={() => router.back()} style={{ margin: "20px" }}>
        뒤로
      </button>
      <div style={{ display: "flex", alignItems: "center" }}>
        {posterPath && (
          <img
            className="poster"
            src={posterPath}
            style={{ width: "50%", height: "50%" }}
          />
        )}
        <div style={{ marginLeft: "1rem" }}>
          <h2>{title || "loading"}</h2>
          <p>{releaseYear}</p>
          <p>{certification || "등급 정보 없음"}</p>
          <p>{formatRuntime(runtime)}</p>
        </div>
      </div>
      <div>
        <button className="play">PLAY</button>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <p className="content">{overview || "정보가 없습니다"}</p>
      </div>
      <style jsx>{`
        .page {
          background-color: #23bde0;
        }
        .poster {
          margin-left: 20px;
        }
        .content {
          margin: 20px;
          padding-bottom: 50px;
        }
        .play {
          background-color: red;
          color: white;
          padding: 17px 180px;
          font-size: 30px;
          align-self: center;
          margin: 20px;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<DetailProps> = async (
  context
) => {
  const API_KEY = "031ae0d74f8282b211a02098af80df7a";
  const { id } = context.query;
  const movie = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ko-KR`
    )
  ).json();
  const releaseDate = new Date(movie.release_date);
  const releaseYear = releaseDate.getFullYear();
  const certification = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=${API_KEY}`
    )
  ).json();
  const certificationInfo = certification.results.find(
    (r: { iso_3166_1: string }) => r.iso_3166_1 === "KR"
  );
  const runtime = movie.runtime;
  const overview = movie.overview;
  return {
    props: {
      title: movie.original_title,
      posterPath: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      releaseYear,
      certification: certificationInfo
        ? certificationInfo.release_dates[0].certification
        : "",
      runtime,
      overview,
    },
  };
};
