import Footer from './footer/footer.tsx';
import Header from './header/header.tsx';
import React from 'react';
import {useAppSelector} from '@/hooks';
import {getFavorites} from '@/store/offer-data';
import {clsx} from 'clsx';

type LayoutProps = {
  children: React.ReactNode;
  page: 'offer' | 'favorites' | 'main' | 'login';
}

const layoutProps = {
  offer : {
    rootClassName : [],
    shouldRenderUser : true,
    shouldRenderFooter : false
  },
  favorites : {
    rootClassName : [],
    shouldRenderUser : true,
    shouldRenderFooter : true
  },
  main : {
    rootClassName : ['page--gray', 'page--main'],
    shouldRenderUser : true,
    shouldRenderFooter : false
  },
  login : {
    rootClassName : ['page--gray', 'page--login'],
    shouldRenderUser : false,
    shouldRenderFooter : false
  },
};

export default function Layout ({children, page} : LayoutProps) {
  const {rootClassName, shouldRenderUser, shouldRenderFooter} = layoutProps[page];
  const favoriteOffers = useAppSelector(getFavorites);

  return (
    <div className={clsx('page', ...rootClassName, (favoriteOffers.length === 0 && 'page--favorites-empty'))}>
      <Header shouldRenderUser={shouldRenderUser} />
      {children}
      {shouldRenderFooter && <Footer />}
    </div>
  );
}
