import React, { createContext, useContext } from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import '../../assets/css/VoiceOverCard.css';
import { VoiceOverData, VoiceOverData2 } from '../../data/VoiceOverData';

// const options = {
//     audioLists: VoiceOverData,
//     defaultPlayIndex: 0,
//     theme: 'auto',
//     bounds: 'body',
//     quietUpdate: false,
//     clearPriorAudioLists: false,
//     autoPlayInitLoadPlayList: false,
//     preload: false,
//     glassBg: false,
//     remember: false,
//     remove: true,
//     defaultPosition: {
//         right: 100,
//         bottom: 120,
//     },
//     defaultPlayMode: 'order',
//     mode: 'full',
//     once: false,
//     autoPlay: false,
//     toggleMode: true,
//     showMiniModeCover: true,
//     showMiniProcessBar: false,
//     drag: true,
//     seeked: true,
//     showMediaSession: true,
//     showProgressLoadBar: true,
//     showPlay: true,
//     showReload: true,
//     showDownload: true,
//     showPlayMode: true,
//     showThemeSwitch: true,
//     showLyric: true,
//     showDestroy: true,
//     extendsContent: null,
//     defaultVolume: 1,
//     playModeShowTime: 600,
//     loadAudioErrorPlayNext: true,
//     autoHiddenCover: false,
//     spaceBar: true,
//     responsive: true,
//     mobileMediaQuery: '(max-width: 1024px)',
//     volumeFade: {
//         fadeIn: 1000,
//         fadeOut: 1000,
//     },
//     restartCurrentOnPrev: false,
//     sortableOptions: {},

//     onAudioDownload(audioInfo) {
//         console.log('audio download', audioInfo)
//     },

//     onAudioPlay(audioInfo) {
//         console.log('audio playing', audioInfo)
//     },

//     onAudioPause(audioInfo) {
//         console.log('audio pause', audioInfo)
//     },

//     onAudioSeeked(audioInfo) {
//         console.log('audio seeked', audioInfo)
//     },

//     onAudioVolumeChange(currentVolume) {
//         console.log('audio volume change', currentVolume)
//     },

//     onAudioEnded(currentPlayId, audioLists, audioInfo) {
//         console.log('audio ended', currentPlayId, audioLists, audioInfo)
//     },

//     onAudioAbort(currentPlayId, audioLists, audioInfo) {
//         console.log('audio abort', currentPlayId, audioLists, audioInfo)
//     },

//     onAudioProgress(audioInfo) {
//         // console.log('audio progress', audioInfo)
//     },

//     onAudioReload(audioInfo) {
//         console.log('audio reload:', audioInfo)
//     },

//     onAudioError(errMsg, currentPlayId, audioLists, audioInfo) {
//         console.error('audio error', errMsg, currentPlayId, audioLists, audioInfo)
//     },

//     // theme change handle
//     // onThemeChange(theme) {
//     //   console.log('theme change:', theme)
//     // },

//     onAudioListsChange(currentPlayId, audioLists, audioInfo) {
//         console.log('audio lists change:', currentPlayId, audioLists, audioInfo)
//     },

//     onAudioPlayTrackChange(currentPlayId, audioLists, audioInfo) {
//         console.log(
//             'audio play track change:',
//             currentPlayId,
//             audioLists,
//             audioInfo,
//         )
//     },

//     // onPlayModeChange(playMode) {
//     //   console.log('play mode change:', playMode)
//     // },

//     // onModeChange(mode) {
//     //   console.log('mode change:', mode)
//     // },

//     onAudioListsPanelChange(panelVisible) {
//         console.log('audio lists panel visible:', panelVisible)
//     },

//     onAudioListsSortEnd(oldIndex, newIndex) {
//         console.log('audio lists sort end:', oldIndex, newIndex)
//     },

//     onAudioLyricChange(lineNum, currentLyric) {
//         console.log('audio lyric change:', lineNum, currentLyric)
//     },

//     getContainer() {
//         return document.body
//     },
//     getAudioInstance(audio) {
//         console.log('audio instance', audio)
//     },

//     onBeforeDestroy(currentPlayId, audioLists, audioInfo) {
//         console.log('onBeforeDestroy currentPlayId: ', currentPlayId)
//         console.log('onBeforeDestroy audioLists: ', audioLists)
//         console.log('onBeforeDestroy audioInfo: ', audioInfo)
//         return new Promise((resolve, reject) => {
//             if (window.confirm('Are you confirm destroy the player?')) {
//                 resolve()
//             } else {
//                 reject()
//             }
//         })
//     },

//     onDestroyed(currentPlayId, audioLists, audioInfo) {
//         console.log('onDestroyed:', currentPlayId, audioLists, audioInfo)
//     },

//     onCoverClick(mode, audioLists, audioInfo) {
//         console.log('onCoverClick: ', mode, audioLists, audioInfo)
//     },
// }

const options = {
    audioLists: VoiceOverData,
    clearPriorAudioLists: true
};

const AppContext = createContext({
    options,
    setOptions: () => { }
});

function VoiceOverCard({ item }) {
    const { options, setOptions } = useContext(AppContext);

    return (
        <div className="voice-over-card-wrapper">
            <div className="voice-over-card">
                <div className="voice-over-card-image">
                    <Link className='artist-link' to={item.link}>
                        <img src={item.image} alt='voice-over_artist' />
                    </Link>
                    <div className='artist-play-section'>
                        <BsFillPlayCircleFill className='artist-play-icon'
                            onClick={() => {
                                console.log('before', options.audioLists)
                                setOptions({ ...options, audioLists: VoiceOverData2 })
                                console.log('after', options.audioLists)
                            }}
                        />
                        {/* <AudioPlayer
                                preload='metadata'
                                src={item.musicSrc} showFilledProgress={false}
                                onPlay={() => console.log('onPlay')}
                                onClick={audiofunction}
                                ref={player} /> */}
                    </div>
                    <Link className='artist-link' to={item.link}>
                        <div className="artist-details">
                            <h2>
                                {item.firstname} {item.lastname}
                            </h2>
                        </div>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default VoiceOverCard;