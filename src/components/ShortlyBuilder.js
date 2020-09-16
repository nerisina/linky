import React, { Component } from 'react';
import axios from '../axios-urls';
import UrlsList from './UrlsList/UrlsList';
import NewUrl from './NewUrl/NewUrl';

class ShortlyBuilder extends Component {
    state = {
        urls: [],
        url: '',
        slug: '',
        error: false,
        expire: false,
    };

    componentDidMount() {
        axios.get('/links/')
            .then((response) => {
                const urls = response.data;
                const updatedUrls = urls.map(url => {
                    return {
                        ...url,
                    }
                });
                this.setState({ urls: updatedUrls });
            })
            .catch((err) => {
                this.setState({ error: ':( ' });
            });
    }

    deletePostHandler = (slug, event) => {
        event.preventDefault();
        axios.delete(`/links/${slug}`).then((response) => {
            this.setState({ urls: this.state.urls.filter(url => url.slug !== slug) });
        }).catch((err) => {
            this.setState({ error: 'Fuck fuck' });
        });
    };

    render() {
        //
        const {error, urls} = this.state;
        let urlsList;
        if(!error){
            urlsList = <div className="list">
                <h3>List of URLS</h3>
                    {urls.map((url, i) => (
                    <UrlsList key={i} slug={url.slug} url={url.url} shortUrl={url.short_url} delete={this.deletePostHandler} expire={this.state.expire}/>
                ))}
                </div>;
        }
        //

        
     
        const success = this.state.error ? this.state.error.message : '';

        return (
            <main>
                    {success}
                    <NewUrl />
                    {urlsList}
            </main>
        );
    }
}

export default ShortlyBuilder;