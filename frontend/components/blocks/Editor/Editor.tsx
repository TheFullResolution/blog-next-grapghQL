import 'react-mde/lib/styles/css/react-mde-all.css'

import { Component } from 'react'
import ReactMde from 'react-mde'
import Showdown from 'showdown'

import styles from './editor.scss'

interface Props {
  value: string
  handleChange: (value: string) => void
  error?: boolean | string
}

export interface State {
  tab: 'write' | 'preview'
}

export class Editor extends Component<Props, State> {
  private converter: Showdown.Converter

  public constructor(props: Props) {
    super(props)
    this.state = {
      tab: 'write',
    }
    this.converter = new Showdown.Converter({
      tables: true,
      simplifiedAutoLink: true,
      strikethrough: true,
      tasklists: true,
    })
  }

  private handleValueChange = (value: string) => {
    this.props.handleChange(value)
  }

  private handleTabChange = (tab: 'write' | 'preview') => {
    this.setState({ tab })
  }

  public render() {
    const { value, error } = this.props
    return (
      <div className={styles.container}>
        <ReactMde
          onChange={this.handleValueChange}
          onTabChange={this.handleTabChange}
          value={value}
          generateMarkdownPreview={markdown =>
            Promise.resolve(this.converter.makeHtml(markdown))
          }
          selectedTab={this.state.tab}
        />
        {error && <p className={styles.error}>{error}</p>}
      </div>
    )
  }
}
