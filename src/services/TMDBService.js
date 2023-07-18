import { MovieDb } from 'moviedb-promise';

const moviedb = new MovieDb('9e1941239712bac06fec3f28c0d09b25');

export default {
  getPopularMovies: (language) => moviedb.moviePopular({ language }),
  getMovieDetails: (id, language) => moviedb.movieInfo({ id, language }), 
  getPopularTVShows: (language) => moviedb.tvPopular({ language }), 
  searchMovies: (query, language, page, with_genres ) => moviedb.searchMovie({ query, language, page, with_genres }),
  getMoviesByGenre: (genreId, language) => moviedb.discoverMovie({ with_genres: genreId, language }),
  getMovieGenres: (language) => moviedb.genreMovieList({ language }),
  getMovieImages: (id, language) => moviedb.movieImages({ id}),
  getMovieRecommendations: (id, language) => moviedb.movieRecommendations({ id, language }),
  getUpcomingMovies:(language) => moviedb.upcomingMovies({ language }),
  getTopRatedMovies: (language) => moviedb.movieTopRated({ language }),
  getReviews: (id, language) => moviedb.movieReviews({ id, language }),
  getLanguages: (id, language) => moviedb.languages({ language }),
};

export function moviePoster(poster_path){
    return `https://image.tmdb.org/t/p/w500${poster_path}`;
};

export function sortItems(items, sort) {
    switch (sort) {
      case 'popular':
        return items.sort((a, b) => a.popularity - b.popularity);
      case 'topRated':
        return items.sort((a, b) => b.vote_average - a.vote_average);
      case 'mostVoted':
        return items.sort((a, b) => b.vote_count - a.vote_count);
      case 'chronological':
        return items.sort((a,b) => {
          const itemADate = new Date(a.release_date || a.first_air_date);
          const itemBDate = new Date(b.release_date || b.first_air_date);
          return itemBDate - itemADate;
        });
      case 'alphabetical':
        return items.sort((a, b) => {
          const itemA = a.title || a.name;
          const itemB = b.title || b.name;
          if (itemA && itemB) {
            return itemA.localeCompare(itemB);
          } else {
            return 0;
          }
        });
      default:
        return items;
    }
  }
/*
complete function list
Function
configuration
countries
jobs
languages
primaryTranslations
timezones
find
searchCompany
searchCollection
searchKeyword
searchMovie
searchMulti
searchPerson
searchTv
searchList
collectionInfo
collectionImages
collectionTranslations
discoverMovie
discoverTv
trending
movieInfo
movieAccountStates
movieAlternativeTitles
movieChanges
movieCredits
movieExternalIds
movieImages
movieKeywords
movieReleaseDates
movieVideos
movieWatchProvidersForId
movieWatchProviders
movieTranslations
movieRecommendations
movieSimilar
movieReviews
movieLists
movieRatingUpdate
movieRatingDelete
movieLatest
movieNowPlaying
moviePopular
movieTopRated
upcomingMovies
tvInfo
tvAccountStates
tvAlternativeTitles
tvChanges
tvContentRatings
tvCredits
episodeGroups
tvExternalIds
tvImages
tvKeywords
tvRecommendations
tvReviews
tvScreenedTheatrically
tvSimilar
tvTranslations
tvVideos
tvWatchProvidersForId
tvWatchProviders
tvRatingUpdate
tvRatingDelete
tvLatest
tvAiringToday
tvOnTheAir
tvPopular
tvTopRated
seasonInfo
seasonChanges
seasonAccountStates
seasonCredits
seasonExternalIds
seasonImages
seasonVideos
episodeInfo
episodeChanges
episodeAccountStates
episodeCredits
episodeExternalIds
episodeImages
episodeTranslations
episodeRatingUpdate
episodeRatingDelete
episodeVideos
personInfo
personChanges
personMovieCredits
personTvCredits
personCombinedCredits
personExternalIds
personImages
personTaggedImages
personTranslations
personLatest
personPopular
creditInfo
listInfo
listStatus
createList
createListItem
removeListItem
clearList
deleteList
genreMovieList
genreTvList
keywordInfo
keywordMovies
companyInfo
companyAlternativeNames
companyImages
accountInfo
accountLists
accountFavoriteMovies
accountFavoriteTv
accountFavoriteUpdate
accountRatedMovies
accountRatedTv
accountRatedTvEpisodes
accountMovieWatchlist
accountTvWatchlist
accountWatchlistUpdate
changedMovies
changedTvs
changedPeople
movieCertifications
tvCertifications
networkInfo
networkAlternativeNames
networkImages
review
episodeGroup*/
