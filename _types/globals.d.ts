declare module '*.scss' {
  const content: { [className: string]: string }
  export = content
}

declare module '@reach/alert-dialog' {
  const AlertDialog: React.ComponentType<any>
  const AlertDialogLabel: React.ComponentType<any>
  const AlertDialogDescription: React.ComponentType<any>
  const AlertDialogOverlay: React.ComponentType<any>
  const AlertDialogContent: React.ComponentType<any>

  export {
    AlertDialog,
    AlertDialogLabel,
    AlertDialogDescription,
    AlertDialogOverlay,
    AlertDialogContent,
  }
}
