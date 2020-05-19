const REGEXP_MATCHER = /[\u0300-\u036f]/g;

/**
 * Removes accents (diacritic signs) from the given `$str`.
 *
 * @param string the input string
 *
 * @return the cleaned string
 */
export default function unaccent($str: string): string {
  return $str.normalize("NFD").replace(REGEXP_MATCHER, "");
}
