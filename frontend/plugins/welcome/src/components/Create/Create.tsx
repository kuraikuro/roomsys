import React, { useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { DefaultApi } from'../../api/apis';
import { Typography,Link } from '@material-ui/core'
import { Content, Header, Page, pageTheme } from '@backstage/core';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import { Alert } from '@material-ui/lab';
import { Link as RouterLink } from 'react-router-dom';


import { EntRoomStatus } from '../../api/models/EntRoomStatus';
import { EntRoomType } from '../../api/models/EntRoomType';
import { EntRoomInfo } from '../../api/models/EntRoomInfo';
import { EntRoom } from '../../api/models/EntRoom';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      button: {
        display: 'block',
        marginTop: theme.spacing(2),
      },
      formControl: {
          width: 850,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
        paper: {
          marginTop: theme.spacing(2),
          marginBottom: theme.spacing(2),
        },
    }),
  );

export  default  function Create() {
    
  const classes = useStyles();
  const http = new DefaultApi();

  const [status, setStatus] = React.useState(false);
  const [alert, setAlert] = React.useState(true);

  const [room, setRoom] = React.useState<EntRoom[]>([]);
    const [roomstatus, setRoomStatus] = React.useState<EntRoomStatus[]>([]);
    const [roomtype, setRoomType] = React.useState<EntRoomType[]>([]);
    const [roominfo, setRoomInfo] = React.useState<EntRoomInfo[]>([]);
   
    const [roomstatusid, setroomstatusId] = React.useState(Number);
    const [roomtypeid, setroomtypeId] = React.useState(Number);
    const [roominfoid, setroominfoId] = React.useState(Number);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        const getRoomStatus = async () => {
            const res = await http.listRoomstatus({ limit: 2, offset: 0 });
            setLoading(false);
            setRoomStatus(res);
          };
          const getRoomType = async () => {
            const res = await http.listRoomtype({ limit: 2, offset: 0 });
            setLoading(false);
            setRoomType(res);
          };
        const getRoomInfo = async () => {
            const res = await http.listRoominfo({ limit: 2, offset: 0 });
            setLoading(false);
            setRoomInfo(res);
        };
        getRoomStatus();
        getRoomType();
        getRoomInfo();
    }, [loading]);
    const getRoom = async () => {
        const res = await http.listRoom({ limit: 10, offset: 0 });
        setRoom(res);
      };
    //handle
    const RoomStatushandleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setroomstatusId(event.target.value as number);
      };
      const RoomTypehandleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setroomtypeId(event.target.value as number);
      };
      const RoomInfohandleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setroominfoId(event.target.value as number);
      };
      const CreateRoom = async () => {
        const room = {
          roomStatus : roomstatusid,
          roomType: roomtypeid ,
          roomInfo : roominfoid,
        };
        console.log(room);
        const res: any = await http.createRoom({ room : room });
        setStatus(true);
        if (res.id != '') {
          setAlert(true);
        } else {
          setAlert(false);
        }
      };
      const timer = setTimeout(() => {
        setStatus(false);
      }, 1000);

    return(
        <Page theme={pageTheme.home}>
            <Header 
            title={`บันทึกห้องพัก`}>
            </Header>
            <Content>
            <br />
            <br />
            <Typography variant="h6" gutterBottom align="center">
              <div className={classes.paper}>สถานะ</div>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>สถานะของห้อง</InputLabel>
              <Select
                name="roomstatus"
                label="สถานะของห้อง"
                value={roomstatusid}
                onChange={RoomStatushandleChange}
              >
              {roomstatus.map(item => {
                return (
                  <MenuItem value={item.id}>
                  {item.roomStatus}
                  </MenuItem>
                  );
                })}
              </Select>
              </FormControl>
              <br />
              <br />
              <div className={classes.paper}>ประเภท</div>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>เลือกประเภทห้อง</InputLabel>
                  <Select
                    name="roomtype"
                    label="เลือกประเภทห้อง"
                    value={roomtypeid}
                    onChange={RoomTypehandleChange}
                  >
                  {roomtype.map(item => {
                    return (
                      <MenuItem value={item.id}>
                      {item.roomType} {item.cost}
                      </MenuItem>
                      );
                    })}
                  </Select>
              </FormControl>
              <br />
              <br /> 
              <div className={classes.paper}>ข้อมูลตัวห้อง</div>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>เลือกข้อมูลตัวห้อง</InputLabel>
              <Select
                name="roominfo"
                label="เลือกข้อมูลตัวห้อง"
                value={roominfoid}
                onChange={RoomInfohandleChange}
              >
              {roominfo.map(item => {
                return (
                  <MenuItem value={item.id}>
                  {item.info}
                  </MenuItem>
                  );
                })}
              </Select>
              </FormControl>
              <br />
              <br />
              <FormControl>
              <Button
                onClick={() => {
                  CreateRoom();
                }}
                variant="contained"
                color="primary"
                style={{backgroundColor: "#26c6da"}}
                size="large"
                startIcon={<SaveIcon />}
                >
                บันทึก
              </Button>
              {status ? (
                <div>
                {alert ? (
                  <Alert severity="success">
                    บันทึกสำเร็จ !
                  </Alert>
                  ) : (
                  <Alert severity="warning" style={{ marginTop: 20 }}>
                    This is a warning alert — check it out!
                  </Alert>
                )}
                </div>
              ) : null}
              <br />
              <Link component={RouterLink} to="/Room">
              <Button variant="contained" color="primary" style={{backgroundColor: "#26c6da"}} size="large" startIcon={<UndoIcon />}>
                ย้อนกลับ
              </Button>
              </Link>
              </FormControl>
            </Typography>
          </Content>
      </Page>
  );
}
