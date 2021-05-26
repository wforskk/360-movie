import React, { ReactNode } from 'react'
import css from './Contact.module.scss'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { MenuItem } from '@material-ui/core'
import SubjectTitle from '../Util/SubjectTitle/SubjectTitle'
import HandsUpTxt from '../Util/HandsUpTxt/HandsUpTxt'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
            '& label.Mui-focused': {
                color: 'rgb(96, 151, 133)',
            },
        },
        input: {
            color: 'rgb(96, 151, 133)',
            '& input': {
                color: 'rgb(96, 151, 133)',
            },
        }
    }),
)


type Props = {
    children?: ReactNode
}

const currencies = [
    {
        label: '駅（フォーム）',
        value: '001',
    },
    // {
    //     label: 'パターン2',
    //     value: '002',
    // },
    // {
    //     label: 'パターン3',
    //     value: '003',
    // },
    // {
    //     label: 'パターン4',
    //     value: '004',
    // },
];

const Contact = () => {

    const [currency, setCurrency] = React.useState('001');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    }

    // const handleSubmit = (val) => {
    //     console.log(val)
    //     console.log('submit')
    //     return false
    // }

    return (
        <div className={css.contentWrapper}>
            <div className={css.content}><div className={css.itemWrapper} id='contact'>
                <SubjectTitle text='お問い合わせ'></SubjectTitle>
                <form className={css.form} noValidate autoComplete="off" >
                    {/* <form className={css.form} noValidate autoComplete="off" onSubmit={handleSubmit}> */}
                    <TextField
                        required
                        id="companyName"
                        label="会社名"
                        className={css.textArea}
                        fullWidth={true}
                    />
                    <TextField
                        required id="name"
                        label="氏名"
                        className={css.textArea}
                        fullWidth={true}
                    />
                    <TextField
                        required id="phoneNumber"
                        label="電話番号"
                        className={css.textArea}
                        fullWidth={true}
                    />
                    <TextField
                        required
                        id="mailAddress"
                        type='mail'
                        label="メールアドレス"
                        className={css.textArea}
                        fullWidth={true}
                    />
                    <TextField
                        id="pattern"
                        select
                        label="パターン選択"
                        value={currency}
                        onChange={handleChange}
                        className={css.textArea}
                        helperText="使用する360°空間のパターンを選択してください"
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField id="URL" label="動画URL" className={css.textArea} fullWidth={true} />
                    <HandsUpTxt>※動画データがURLで共有可能な「ギガファイル便」、「Googleドライブ」を記載</HandsUpTxt>
                    <TextField
                        id="contact"
                        label="お問い合わせ"
                        className={css.textArea}
                        fullWidth={true}
                        multiline
                        rows={4}
                        variant='outlined'
                    />
                    {/* <button className={css.contactBtn} type='submit'>送信</button> */}
                    <button className={css.contactBtn} >送信(ダミー）</button>
                </form>
            </div>
            </div>
        </div>

    )
}

export default Contact
