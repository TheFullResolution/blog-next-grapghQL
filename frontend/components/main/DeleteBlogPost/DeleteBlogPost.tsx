import * as styles from './deleteBlogPost.scss'
import '@reach/dialog/styles.css'

import { Component, createRef } from 'react'
import {
  AlertDialog,
  AlertDialogLabel,
  AlertDialogDescription,
} from '@reach/alert-dialog'
import { Delete_Blog_PostComponent } from '../../../generated/graphql'
import { withRouter, SingletonRouter } from 'next/router'
import { routes, RoutPath } from '../../../app/routes'
import { Button } from '../../blocks/Button/Button'
import { FaExclamationTriangle } from 'react-icons/fa'
import { ErrorMessage } from '../../blocks/Error/ErrorMessage';

interface Props {
  id: string
  onClose: () => void
  router: SingletonRouter
}

const DeleteBlogPost = withRouter(
  class DeleteBlogPostClass extends Component<Props> {
    private cancelRef = createRef<HTMLButtonElement>()

    public render() {
      const { onClose, id, router } = this.props
      return (
        <Delete_Blog_PostComponent>
          {(deleteBlogPost, { loading, error }) => {
            const onClick = async () => {
              const deleted = await deleteBlogPost({ variables: { id } })
              if (deleted && deleted.data && deleted.data.deleteBlogPost.id) {
                router.push(routes[RoutPath.home].path)
              }
            }
            return (
              <AlertDialog
                leastDestructiveRef={this.cancelRef}
                className={styles.container}
              >
                <AlertDialogLabel className={styles.title}>
                  <FaExclamationTriangle /> Please Confirm!{' '}
                  <FaExclamationTriangle />
                </AlertDialogLabel>

                <AlertDialogDescription className={styles.description}>
                  Once you delete the blog post, it is impossible to reverse the
                  action.
                </AlertDialogDescription>
                {error && <ErrorMessage error={error.message}></ErrorMessage>}
                <div className={styles.buttons}>
                  <Button version="secondary" disabled={loading} onClick={onClick}>
                    Yes, delete
                  </Button>
                  <Button
                    disabled={loading}
                    ref={this.cancelRef}
                    onClick={onClose}
                    version="primary"
                  >
                    No, Cancel
                  </Button>
                </div>
              </AlertDialog>
            )
          }}
        </Delete_Blog_PostComponent>
      )
    }
  },
)

export { DeleteBlogPost }
