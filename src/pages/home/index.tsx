import React, { PureComponent } from 'react'

import { Layout } from "../../components/Layout";
import List from "./TodoListPagination"
import { rootStore } from '../../models/Root'
import {scrollHandler} from '../../utils/handleScroll'

export default class Home extends PureComponent {
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
    handleScroll=()=> scrollHandler(rootStore.TodoListsPagination.fetchList());        

    
    intiateListners(){
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    intiateServices() {
        rootStore.TodoListsPagination.fetchList();
    }

    render() {
        return (
            <Layout title="ToDos">
                <div>
                    <List />
                </div>
            </Layout>
        )
    }
}