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
            urlsList = 
                <section className="urls">
                    {urls.map((url, i) => (
                        <UrlsList key={i} slug={url.slug} url={url.url} shortUrl={url.short_url} delete={this.deletePostHandler} expire={this.state.expire}/>
                    ))}
                </section>;
        }
        //

        const success = this.state.error ? this.state.error.message : '';

        return (
            <main>
                    {success}
                    {/* <NewUrl /> */}
                    <NewUrl onNewUrl={url => this.setState({...this.state, urls: [url, ...this.state.urls]})} />
                    {urlsList}
            </main>
        );
    }
}

export default ShortlyBuilder;
