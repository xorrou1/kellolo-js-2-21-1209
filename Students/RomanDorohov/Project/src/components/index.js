import Basket from './basket';
import Catalog from './catalog';
//import SearchController from './search.js';

export default () => {
    //let searchController = new SearchController();
    let basket = new Basket();
    let catalog = new Catalog(basket, searchController);
    
} 