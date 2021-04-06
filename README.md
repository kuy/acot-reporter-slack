# acot-reporter-slack

<a href="https://www.npmjs.com/package/acot-reporter-slack"><img alt="NPM Status" src="https://img.shields.io/npm/v/acot-reporter-slack.svg?style=flat"></a>

A Slack reporter for [acot](https://github.com/acot-a11y/acot).

## Usage

### Installation

Install via npm:

```bash
$ npm install --save acot-reporter-slack
```

Install via yarn:

```bash
$ yarn add acot-reporter-slack
```

### Configuration

```javascript
module.exports = {
  reporter: {
    use: "slack",
    with: {
      url: "https://hooks.slack.com/services/XXX/XXX/XXX",
    },
  },
};
```

- `url`: URL of Slack's incoming webhook **(Required)**

## Development

### TODOs

- [x] Minimum notification
- [x] Provide option to configure Slack's incoming webhook URL
- [ ] Report audit details
- [ ] Decorate notification using [Block Kit](https://api.slack.com/block-kit)
