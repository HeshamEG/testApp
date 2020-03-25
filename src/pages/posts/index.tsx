import React, { PureComponent } from 'react'
import { Layout } from "../../components/Layout";
import List from "./PostList"
import { rootStore } from '../../models/Root'
import {scrollHandler} from '../../utils/handleScroll'
import {Form} from './Form';



class Posts extends PureComponent {
    constructor(props: Readonly<{}>) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
    }
    state = {
        height: window.innerHeight
    };
    componentDidMount() {
        this.intiateServices();
        this.intiateListners();
    }
    
    handleScroll=()=> scrollHandler(rootStore.PostListPagination.fetchList());        
    onSubmit = (data: any) => rootStore.PostListPagination.submitPost(data) ;

    
    intiateListners(){
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    intiateServices() {
        rootStore.PostListPagination.fetchList();
    }

    render() {
        return (
            <Layout title="POSTS">
                <div>
                    <Form onSubmit={this.onSubmit}/>
                    <List />
                </div>
            </Layout>
        )
    }
}

export default Posts;
