import { Movies } from './movies';
export interface MovieSearchResult{
    page :number,
    results :Movies[],
    total_pages :number,
    total_results :number
}