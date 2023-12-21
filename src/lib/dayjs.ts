import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import ptBr from 'dayjs/locale/pt-br'
import timezone from 'dayjs/plugin/timezone'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.locale(ptBr)

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(relativeTime)

dayjs.tz.setDefault('America/Sao_Paulo')

export { dayjs }
