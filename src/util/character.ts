export function getSpeciesParameter(raceParameter: string, statusParameter: string, pageNumber?: number): string {
  let url = ''

  if (raceParameter === 'All') {

  } else {
    url += `species=${raceParameter}&`
  }

  if (statusParameter === 'All') {

  } else {
    url += `status=${statusParameter}&`
  }

  if (pageNumber) {
    url += `page=${pageNumber}&`
  }

  return url === '' ? '' : `?${url}`
}
