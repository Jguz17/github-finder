import React from 'react'
import PropTypes from 'prop-types'
import RepoItem from './RepoItem'

const Repos = ({ repos }) => {
    return (
        repos.map(repo => {
            return <RepoItem repo={repo} key={repo.id}/>
        })
    )
}

Repos.propType = {
    repos: PropTypes.array.isRequired
}

export default Repos