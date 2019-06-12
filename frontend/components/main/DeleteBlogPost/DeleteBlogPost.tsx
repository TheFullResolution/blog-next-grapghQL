import * as styles from './deleteBlogPost.scss'
import "@reach/dialog/styles.css";

import { Component, createRef } from 'react'
import {
  AlertDialog,
  AlertDialogLabel,
  AlertDialogDescription,
} from '@reach/alert-dialog'
import { Delete_Blog_PostComponent } from '../../../generated/graphql'
import { withRouter, SingletonRouter } from 'next/router';
import { routes, RoutPath } from '../../../app/routes';
import { Button } from '../../blocks/Button/Button';

interface Props {
  id: string
  onClose: () => void
  router: SingletonRouter
}

const DeleteBlogPost = withRouter(class DeleteBlogPostClass extends Component<Props> {
  private cancelRef = createRef<HTMLButtonElement>()

  public render() {
    const { onClose, id, router } = this.props
    return (
      <Delete_Blog_PostComponent>
        {(deleteBlogPost, { loading, error }) => {
          const onClick = async () => {
            const deleted = await deleteBlogPost({ variables: { id } })
            if(deleted && deleted.data && deleted.data.deleteBlogPost.id) {
              router.push(routes[RoutPath.home].path)
            }
          }
          return (
            <AlertDialog leastDestructiveRef={this.cancelRef}>
              <AlertDialogLabel>Please Confirm!</AlertDialogLabel>

              <AlertDialogDescription></AlertDialogDescription>

              <div className="alert-buttons">
                <Button disabled={loading} onClick={onClick}>Yes, delete</Button>
                <Button disabled={loading} ref={this.cancelRef} onClick={onClose}>No, Cancel</Button>
              </div>
            </AlertDialog>
          )
        }}
      </Delete_Blog_PostComponent>
    )
  }
})

export { DeleteBlogPost }
