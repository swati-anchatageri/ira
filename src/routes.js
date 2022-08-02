import React from 'react';
import { Redirect } from 'react-router-dom';

// Layout Types
import { DefaultLayout } from './layouts';

// Route Views
import DataHealth from './views/DataHealth';
import BlogOverview from './views/BlogOverview';
import UserProfileLite from './views/UserProfileLite';
import AddNewPost from './views/AddNewPost';
import Errors from './views/Errors';
import ComponentsOverview from './views/ComponentsOverview';
import Tables from './views/Tables';
import BlogPosts from './views/BlogPosts';
//import Discussions from './components/blog/Discussions';
import ForumQuestion from './views/ForumQuestion';
import NewForumQuestion from './views/AddNewForumQuestion';
import NewQuestion from "./views/NewQuestion";
import Details from "./views/Details";
import Shorts from "./views/shorts"
import Recipes from './views/recipe';
import RecipeView from './views/RecipeView';
import Ingredients from './views/Ingredients'
import IngredientsView from './views/IngredientsView';
import Quicks from "./views/Quick";
import Recommendation from './components/recipes/recommendation';
import ChatView from './views/ChatView'
import ViewTranslation from './views/Translation'
//import Login from "./container/Login"

export default [
  {
    path: '/',
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-posts" />,
  },
  // {
  //   path:'/Login',
  //   layout: DefaultLayout,
  //   element: Login,
  // },
  {
    path: '/data-health',
    layout: DefaultLayout,
    component: DataHealth,
  },
  {
    path: '/translation',
    layout: DefaultLayout,
    component: ViewTranslation,
  },
  {
    path: '/shorts',
    layout: DefaultLayout,
    component: Shorts
  },
  {
    path: '/chats',
    layout: DefaultLayout,
    component: ChatView
  },
  {
    path:'/details',
    layout:DefaultLayout,
    component: Details
  },
  {
    path:'/recommendation',
    layout:DefaultLayout,
    component: Recommendation
  },
  {
    path:'/recipe-view',
    layout:DefaultLayout,
    component: RecipeView
  },
  {
    path:'/recipes',
    layout:DefaultLayout,
    component: Recipes
  },
  {
    path:'/ingredient-view',
    layout:DefaultLayout,
    component: IngredientsView
  },
  {
    path:'/ingredients',
    layout:DefaultLayout,
    component: Ingredients
  },
  {
    path:'/quicks',
    layout:DefaultLayout,
    component: Quicks
  },
  {
    path: '/blog-overview',
    layout: DefaultLayout,
    component: BlogOverview,
  },
  {
    path:'/new-draft',
    layout: DefaultLayout,
    component: NewForumQuestion,
  },
  {
    path: '/forum-question',
    layout: DefaultLayout,
    component: ForumQuestion,
  },
  {
    path: '/new-question',
    layout: DefaultLayout,
    component: NewQuestion,
  },
  {
    path: '/user-profile-lite',
    layout: DefaultLayout,
    component: UserProfileLite,
  },
  {
    path: '/user-profile',
    layout: DefaultLayout,
    component: UserProfileLite,
  },
  {
    path: '/edit-user-profile',
    layout: DefaultLayout,
    component: UserProfileLite,
  },
  {
    path: '/add-new-post',
    layout: DefaultLayout,
    component: AddNewPost,
  },
  {
    path: '/errors',
    layout: DefaultLayout,
    component: Errors,
  },
  {
    path: '/components-overview',
    layout: DefaultLayout,
    component: ComponentsOverview,
  },
  {
    path: '/tables',
    layout: DefaultLayout,
    component: Tables,
  },
  {
    path: '/blog-posts',
    layout: DefaultLayout,
    component: BlogPosts,
  },
];
