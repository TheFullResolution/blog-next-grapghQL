import React from 'react'
import { SearchBlogPost } from './Search'
import { GetItemPropsOptions } from 'downshift'
import styles from './search.scss'
import { classNames } from '../../../utils/classnames'

interface Props {
  readonly blogPosts: Readonly<SearchBlogPost[]>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getItemProps: (options: GetItemPropsOptions<any>) => any
  loading: boolean
  highlightedIndex: number | null
  inputValue?: string | null
}

export const SearchResults: React.FC<Props> = ({
  blogPosts,
  getItemProps,
  loading,
  highlightedIndex,
  inputValue,
}) => {
  return (
    <div className={styles.resultsWrapper}>
      <ul className={styles.results}>
        {loading ? (
          <li className={styles.item}>Loading...</li>
        ) : (
          blogPosts.map((item, index) => (
            <li
              {...getItemProps({
                item,
              })}
              className={classNames([
                styles.item,
                highlightedIndex === index && styles.highlighted,
              ])}
              key={item.id}
            >
              &quot;{item.title}&quot; written by {item.user.name}
            </li>
          ))
        )}
        {!blogPosts.length && !loading && (
          <li className={styles.item}>
            {' '}
            Nothing Found for <i>{inputValue}</i>
          </li>
        )}
      </ul>
    </div>
  )
}
