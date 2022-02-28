import React, {useEffect, useState} from 'react';
import MyModal from "../MyModal/MyModal";
import Crud from "../../services/crud.service";
import Spinner from "../Spinner";
import {useSortedAndSearchedPosts} from "../../hooks/usePosts";


const Posts = () => {
    const postsCrud = new Crud('posts');
    const [showModal, setShowModal] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);
    const [sorter, setSorter] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [usersPosts, setUsersPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchAllPosts()
    }, []);

    const fetchAllPosts = () => {
        setLoading(true);
        postsCrud.get('?_page=1&_limit=15').then((res) => {
            setUsersPosts(res.data);
            setLoading(false);
        })
    };

    const confirmDeletePost = (post) => {
        setCurrentPost(post);
        setShowModal(true);
    };
    const deletePost = () => {
        postsCrud.delete(currentPost.id).then((res) => {
            setUsersPosts(usersPosts.filter((post) => post.id !== currentPost.id))
            setShowModal(false);
        }).catch((err) => console.log(err))
    };

    const onSearch = (e) => {
        setSearchQuery(e.target.value)
    };

    const onSort = (e) => {
        setSorter(+e.target.value)
    };

   const sortedAndSearchedPosts = useSortedAndSearchedPosts(usersPosts, sorter, searchQuery);


    return (
        <div className="container">
            <div className="input-group mt-3">
                <span className="input-group-text" id="basic-addon1">Search</span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search post"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={onSearch}
                />
            </div>
            <select className="form-select mt-3"
                    aria-label="Default select example"
                    onChange={onSort}
            >
                <option defaultValue value="0">from Min to Max</option>
                <option value="1">from Max to Min</option>
            </select>
            {loading ?
                <Spinner/>
                :
                <div className="row">
                    {sortedAndSearchedPosts.length
                        ?
                        sortedAndSearchedPosts.map((post, id) =>
                            <div className="col-sm-6 mt-3" key={post.id}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{post.id}. {post.title}</h5>
                                        <p className="card-text">{post.body}</p>
                                        <button onClick={() => confirmDeletePost(post)}
                                                className="btn btn-primary">Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                        :
                        <h3 className="mt-3">Posts not found</h3>
                    }
                </div>
            }
            <MyModal
                saveButtonShow
                closeButtonShow
                visible={showModal}
                onCancel={() => setShowModal(false)}
                onConfirm={() => deletePost()}
            >
                <h4>Do you really want to delete or think about? </h4>
            </MyModal>
        </div>
    );
};

export default Posts;