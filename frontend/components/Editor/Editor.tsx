import ReactMde from 'react-mde'
import Showdown from 'showdown'
import { Component } from 'react'

import "react-mde/lib/styles/css/react-mde-all.css";


interface Props {
  handleChange: (value: any) => void
}

export interface State {
  value: string
  tab: 'write' | 'preview'
}

export class Editor extends Component<Props, State> {
  converter: Showdown.Converter

  constructor(props: Props) {
    super(props)
    this.state = {
      value: '**Hello world!!!**',
      tab: 'write',
    }
    this.converter = new Showdown.Converter({
      tables: true,
      simplifiedAutoLink: true,
      strikethrough: true,
      tasklists: true,
    })
  }

  handleValueChange = (value: string) => {
    this.setState({ value })
    this.props.handleChange(value)
  }

  handleTabChange = (tab: 'write' | 'preview') => {
    this.setState({ tab })
  }

  render() {
    return (
      <div className="container">
        <ReactMde
          onChange={this.handleValueChange}
          onTabChange={this.handleTabChange}
          value={this.state.value}
          generateMarkdownPreview={markdown =>
            Promise.resolve(this.converter.makeHtml(markdown))
          }
          selectedTab={this.state.tab}
        />
      </div>
    )
  }
}
