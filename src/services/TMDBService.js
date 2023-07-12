import { MovieDb } from 'moviedb-promise';

const moviedb = new MovieDb('9e1941239712bac06fec3f28c0d09b25');

export default {
  getPopularMovies: () => moviedb.moviePopular(),
  getMovieDetails: (id) => moviedb.movieInfo({ id }), 
  getPopularTVShows: () => moviedb.tvPopular(), 
  getTVShowDetails: (id) => moviedb.tvInfo({ id }),
  searchMovies: (query) => moviedb.searchMovie({ query }),
  searchTVShows: (query) => moviedb.searchTv({ query }),
  getMoviesByGenre: (genreId) => moviedb.discoverMovie({ with_genres: genreId }),
  getTVShowsByGenre: (genreId) => moviedb.discoverTv({ with_genres: genreId }), 
  getMovieGenres: () => moviedb.genreMovieList(),
  getTVGenres: () => moviedb.genreTvList(), 
  getMovieImages: (id) => moviedb.movieImages(id),
  getTVShowImages: (id) => moviedb.tvImages(id),
  getMovieRecommendations: (id) => moviedb.movieRecommendations({ id }),
  getTVRecommendations: (id) => moviedb.tvRecommendations({ id }),
  getUpcomingMovies:() => moviedb.upcomingMovies(),
  getTopRatedMovies: () => moviedb.movieTopRated(),
  getReviews: (id) => moviedb.movieReviews(id),

};
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