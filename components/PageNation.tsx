import classes from './PageNation.module.css';

export const Pagination = ({ total, limit, page, setPage }) => {
    const numPages = total > 0 ? Math.ceil(total / limit) : 0;

    if (numPages === 0) {
      return null;
    }
    
  return (
      <nav className={classes.nav}>
        <button className={classes.btn} onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </button>
        {Array(numPages)
          .fill(null)
          .map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
              className={classes.btn}
            >
              {i + 1}
            </button>
          ))}
        <button className={classes.btn} onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </button>
      </nav>
    
  );
}

export default Pagination;