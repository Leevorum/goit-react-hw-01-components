import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ stats, title }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(stat => (
          <li key={stat.id} className={s[stat.label.slice(1)]}>
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      labal: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};
