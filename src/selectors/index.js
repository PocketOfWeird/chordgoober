import { createSelector } from 'reselect'


export const isLoggedIn = state => state.user.uid ? true : false

export const userHasSets = state => state.user.sets ? true : false

export const getCurrentView = state => state.view[state.view.length - 1]

export const getViewParams = state => getCurrentView(state)[1]

const chordsSelector = state => state.chords
const chordFilterSelector = state => state.filter

const has = (chord, filter) => chord.chord.toUpperCase().includes(filter.toUpperCase())
const combineChord = chord => chord.chord + ' ' + chord.modf
const hasCombined = (chord, filter) => combineChord(chord).toLowerCase().includes(filter.toLowerCase())

export const filterChords = createSelector(
  chordsSelector,
  chordFilterSelector,
  (chords, chordFilter) => {
    if (!chordFilter) {
      return chords
    }
    return chords.filter(chord => {
      if (chordFilter.includes(' ') && chord.modf) {
        return hasCombined(chord, chordFilter)
      }
      return has(chord, chordFilter)
    })
  }
)
