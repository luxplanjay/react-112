// import toast, { Toaster } from "react-hot-toast";
// import ArticleList from '../ArticleList/ArticleList';
// import SearchForm from '../SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import SearchForm from '../SearchForm/SearchForm';
import ArticleList from '../ArticleList/ArticleList';
import { fetchArticles } from '../../articleService';
import css from './App.module.css';

// 1. Form submit
// 2. http when?
//   1) form submission (topic change)
//   2) chage page

export default function App() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);

    const handleSearch = (topic) => {
        setSearchTerm(topic);
        setPage(1);
        setArticles([]);
    };

    useEffect(() => {
        if (searchTerm === '') {
            return;
        }

        async function getData() {
            try {
                setError(false);
                setIsLoading(true);
                const data = await fetchArticles(searchTerm, page);
                setArticles((prevArticles) => {
                    return [...prevArticles, ...data];
                });
            } catch {
                setError(true);
                toast.error('Please reload there was an error!!!!');
            } finally {
                setIsLoading(false);
            }
        }

        getData();
    }, [page, searchTerm]);

    return (
        <div className={css.container}>
            <SearchForm onSearch={handleSearch} />

            {error && <b>Whoops there was an error plz reload...</b>}

            {articles.length > 0 && <ArticleList items={articles} />}

            {isLoading && <b>Loading data, please wait...</b>}

            {articles.length > 0 && !isLoading && (
                <button onClick={() => setPage(page + 1)}>
                    Load more articles {page}
                </button>
            )}

            <Toaster position="top-right" />
        </div>
    );
}
