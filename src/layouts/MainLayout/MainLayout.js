import classNames from 'classnames/bind';
import styles from './MainLayout.module.scss';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
    return (
        <>
            <header>Header</header>
            <div className={cx('container')}>
                <aside className={cx('sidebar')}></aside>
                <div className={cx('content')}></div>
            </div>
            <footer></footer>
        </>
    );
}

export default MainLayout;
