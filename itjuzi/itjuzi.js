(() => {
  const tableDom = document.querySelectorAll('.el-table__body-wrapper')[0]
  const rowsDom = tableDom.querySelectorAll('.el-table__row')

  const data = []
  const processRow = (row) => {
    const tds = row.querySelectorAll('td')
    const [time, company, round, money, investor] = [
      processRowTime(tds[1]),
      processRowCompany(tds[2]),
      processRowRound(tds[4]),
      processRowMoney(tds[5]),
      processRowInvestor(tds[6])]
    data.push({ time, company, round, money, investor })
  }

  const processRowTime = (dom) => dom.querySelector('.cell').innerText
  const processRowCompany = (dom) => dom.querySelector('.title-text').innerText
  const processRowRound = (dom) => dom.querySelector('.cell').innerText
  const processRowMoney = (dom) => dom.querySelector('.cell').innerText //*
  const processRowInvestor = (dom) => { //*
    let names = ''
    for (const item of dom.querySelectorAll('.text-truncate')) {
      const text = item.innerText
      text[0] === '[' ? names += text.split(' ')[1] : names += text //判断是不是首行 为[财务顾问]
      names += ' '
    }
    return names.slice(0, -1)
  }

  for (const row of rowsDom) {
    processRow(row)
  }
  console.table(data)

})()