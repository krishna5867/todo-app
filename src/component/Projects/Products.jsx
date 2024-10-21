import { useFetch } from '../hooks/useFetch';

const Products = () => {
    const { data, loading, error } = useFetch({ url: 'https://jsonplaceholder.typicode.com/photos' });

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>Error: {error}</h2>;
    }

    if (!data || data.length === 0) {
        return <h2>No data available</h2>;
    }
    
    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <img src={item.url} alt={item.title} />
                    <img src={item.thumbnailUrl} alt={item.title} />
                </div>
            ))}
        </div>
    )
}

export default Products;