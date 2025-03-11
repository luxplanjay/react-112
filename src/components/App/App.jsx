import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import SearchForm from '../SearchForm/SearchForm';
import ArticleList from '../ArticleList/ArticleList';
import { fetchArticles } from '../../articleService';
import css from './App.module.css';

// Коли відбувається http запит?
//   1) Зміна терміну пошуку searchTerm (сабміт форми)
//   2) Зміна номеру групи page (Клnuік по load more)

export default function App() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);

    const handleSearch = (topic) => {
        setSearchTerm(`${topic}/${Date.now()}`);
        setPage(1);
        setArticles([]);
    };

    const handleLoadMoreClick = () => {
        setPage(page + 1);
    };

    useEffect(() => {
        if (searchTerm === '') {
            return;
        }

        async function getData() {
            try {
                setError(false);
                setIsLoading(true);
                const data = await fetchArticles(
                    searchTerm.split('/')[0],
                    page
                );
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
                <button onClick={handleLoadMoreClick}>
                    Load more articles {page}
                </button>
            )}

            <Toaster position="top-right" />
        </div>
    );
}
