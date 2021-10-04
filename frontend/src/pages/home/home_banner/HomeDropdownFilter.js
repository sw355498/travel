import React, { useState, useMemo } from 'react'
import HomeDropdownFilterList from './HomeDropdownFilterList'

function HomeDropdownFilter(props) {
  const tribesObject = useMemo(() => {
    const ret = {}
    props.tribes.forEach((tribe) => {
      ret[tribe.tribe] = false
    })
    return ret
  }, [props.tribes])

  const langsObject = useMemo(() => {
    const ret = {}
    props.langs.forEach((lang) => {
      ret[lang.lang] = false
    })
    return ret
  }, [props.langs])
  const [tribesInput, setTribesInput] = useState(tribesObject)
  const [langsInput, setlangsInput] = useState(langsObject)

  const { tribes, langs } = props

  return (
    <>
      <div className="dropdown text-center dropend dropdown-row">
        <button
          className="btn dropdown-toggle btn-lg border-1 border-dark td-mt-25"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="td-mt-25 fw-bold ">尋找在地導遊</span>
        </button>
        <div
          className="dropdown-menu td-mt-50"
          aria-labelledby="dropdownMenuButton"
        >
          <HomeDropdownFilterList
            tribesInput={tribesInput}
            langsInput={langsInput}
            setTribesInput={setTribesInput}
            setlangsInput={setlangsInput}
            tribes={tribes}
            langs={langs}
          />
        </div>
      </div>
    </>
  )
}

export default HomeDropdownFilter
